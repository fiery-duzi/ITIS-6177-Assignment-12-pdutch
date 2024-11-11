import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JunkDataSource} from '../datasources';
import {Junk, JunkRelations} from '../models';

export class JunkRepository extends DefaultCrudRepository<
  Junk,
  typeof Junk.prototype.id,
  JunkRelations
> {
  constructor(
    @inject('datasources.junk') dataSource: JunkDataSource,
  ) {
    super(Junk, dataSource);
  }
}
