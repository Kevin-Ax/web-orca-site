import { ItemInterface } from "../core/ItemInterface";
import { OrcInterface } from "../core/OrcInterface";
import { OrcItemsInterface } from "../core/OrcItemsInterface";
import { ItemModel } from "../models/ItemModel";
import { OrcModel } from "../models/OrcModel";

const mockClient = {
    clientName: "Lademir",
    productVision: "Teste unitario"
};

const mockItem = {
    name: "mockItem",
    value: 10,
    description: "Usado para testar"
};

const mockItem2 = {
    name: "mockItem2",
    value: 15,
    description: "Usado para testar soma"
};


let Orc: OrcInterface = OrcModel.create(mockClient.clientName, mockClient.productVision);
const item: ItemInterface = ItemModel.create(mockItem.name, mockItem.value, mockItem.description);
const orcItem: OrcItemsInterface = {
    item: item,
    qtde: 3
};
const item2: ItemInterface = ItemModel.create(mockItem2.name, mockItem2.value, mockItem2.description);
const orcItem2: OrcItemsInterface = {
    item: item2,
    qtde: 2
};

beforeEach(() => {
    Orc = OrcModel.create(mockClient.clientName, mockClient.productVision);
});

describe('Orc class', () => {

    it('should start empty', () => {
        expect(Orc.items.length).toBe(0);
        expect(Orc.total).toBe(0);
    });

    it('should add one more item to items array', () => {
        expect(Orc.items.length).toBe(0);
        Orc.addItem(orcItem);
        expect(Orc.items.length).toBe(1);

    });

    it('should update value when has an amount of items added', () => {
        expect(Orc.total).toBe(0);

        Orc.addItem(orcItem);

        expect(Orc.total).toBe(30);
    });

    it('should update value when two different items were added', () => {
        expect(Orc.total).toBe(0);

        Orc.addItem(orcItem);
        Orc.addItem(orcItem2);

        expect(Orc.total).toBe(60);
    });

    it('should clear budget', () => {

        expect(Orc.total).toBe(0);

        Orc.addItem(orcItem);
        Orc.addItem(orcItem2);

        expect(Orc.total).toBe(60);

        Orc.clear();

        expect(Orc.items.length).toBe(0);
        expect(Orc.total).toBe(0);
    });

});