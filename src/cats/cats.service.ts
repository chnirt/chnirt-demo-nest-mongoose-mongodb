import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel('Cat')
    private readonly catModel: Model<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findById(id: string): Promise<Cat> {
    return await this.catModel.findById(id).exec();
  }

  async create(catInput: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(catInput);
    return await createdCat.save();
  }

  async updateCat(id: string, catInput: CatInput): Promise<Cat> {
    const updatedCat = await this.catModel.findOneAndUpdate(id, catInput, {
      new: true,
    });
    return updatedCat;
  }

  async deleteCat(id: string): Promise<boolean> {
    return (await this.catModel.findOneAndDelete(id)) ? true : false;
  }

  async deleteAll(): Promise<boolean> {
    return (await this.catModel.deleteMany({})) ? true : false;
  }
}
