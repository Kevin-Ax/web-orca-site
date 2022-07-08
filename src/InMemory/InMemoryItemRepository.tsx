import { ItemRepository } from "../core/ItemRepository";
import { ItemModel } from "../models/ItemModel";
import { ItemConstants } from '../constants/ItemConstants';

export class InMemoryItemRepository implements ItemRepository {

    private items: ItemModel[] = ItemConstants;



    async getItems() {
        return this.items;
    }
}