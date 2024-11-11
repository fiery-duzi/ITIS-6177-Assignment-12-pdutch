import {Entity, model, property} from '@loopback/repository';

@model()
export class Junk extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isSmelly: boolean;


  constructor(data?: Partial<Junk>) {
    super(data);
  }
}

export interface JunkRelations {
  // describe navigational properties here
}

export type JunkWithRelations = Junk & JunkRelations;
