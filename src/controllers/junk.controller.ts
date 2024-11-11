import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Junk} from '../models';
import {JunkRepository} from '../repositories';

export class JunkController {
  constructor(
    @repository(JunkRepository)
    public junkRepository : JunkRepository,
  ) {}

  @post('/junk')
  @response(200, {
    description: 'Junk model instance',
    content: {'application/json': {schema: getModelSchemaRef(Junk)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Junk, {
            title: 'NewJunk',
            exclude: ['id'],
          }),
        },
      },
    })
    junk: Omit<Junk, 'id'>,
  ): Promise<Junk> {
    return this.junkRepository.create(junk);
  }

  @get('/junk/count')
  @response(200, {
    description: 'Junk model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Junk) where?: Where<Junk>,
  ): Promise<Count> {
    return this.junkRepository.count(where);
  }

  @get('/junk')
  @response(200, {
    description: 'Array of Junk model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Junk, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Junk) filter?: Filter<Junk>,
  ): Promise<Junk[]> {
    return this.junkRepository.find(filter);
  }

  @patch('/junk')
  @response(200, {
    description: 'Junk PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Junk, {partial: true}),
        },
      },
    })
    junk: Junk,
    @param.where(Junk) where?: Where<Junk>,
  ): Promise<Count> {
    return this.junkRepository.updateAll(junk, where);
  }

  @get('/junk/{id}')
  @response(200, {
    description: 'Junk model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Junk, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Junk, {exclude: 'where'}) filter?: FilterExcludingWhere<Junk>
  ): Promise<Junk> {
    return this.junkRepository.findById(id, filter);
  }

  @patch('/junk/{id}')
  @response(204, {
    description: 'Junk PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Junk, {partial: true}),
        },
      },
    })
    junk: Junk,
  ): Promise<void> {
    await this.junkRepository.updateById(id, junk);
  }

  @put('/junk/{id}')
  @response(204, {
    description: 'Junk PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() junk: Junk,
  ): Promise<void> {
    await this.junkRepository.replaceById(id, junk);
  }

  @del('/junk/{id}')
  @response(204, {
    description: 'Junk DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.junkRepository.deleteById(id);
  }
}
