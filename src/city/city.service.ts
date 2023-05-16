import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
        const citiesCache: CityEntity[] = await this.cacheManager.get(
            `state_${stateId}`,
        );

        if (citiesCache) {
            return citiesCache;
        }

        const cities = await this.cityRepository.find({
            where: {
                stateId,
            },
        });

        await this.cacheManager.set(`state_${stateId}`, cities);

        return cities;
    }
}
