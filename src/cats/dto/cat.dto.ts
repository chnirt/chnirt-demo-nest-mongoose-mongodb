import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class CatDto {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
