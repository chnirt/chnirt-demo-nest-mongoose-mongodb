import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'world';
  }

  @Query(() => [CatDto])
  async cats() {
    return this.catsService.findAll();
  }

  @Query(() => CatDto)
  async cat(@Args('id') id: string) {
    return this.catsService.findById(id);
  }

  @Mutation(() => CatDto)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }

  @Mutation(() => CatDto)
  async updateCat(@Args('id') id: string, @Args('input') input: CatInput) {
    return this.catsService.updateCat(id, input);
  }

  @Mutation(() => Boolean)
  async deleteCat(@Args('id') id: string) {
    return this.catsService.deleteCat(id);
  }

  @Mutation(() => Boolean)
  async deleteAll() {
    return this.catsService.deleteAll();
  }
}
