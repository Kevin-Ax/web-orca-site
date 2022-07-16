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


let Orc: OrcInterface = OrcModel.create(mockClient.clientName, mockClient.productVision);
let item: ItemInterface = ItemModel.create(mockItem.name, mockItem.value, mockItem.description);
let orcItem: OrcItemsInterface = {
    item: item,
    qtde: 3
};

beforeEach(() => {
    Orc = OrcModel.create(mockClient.clientName, mockClient.productVision);
});

beforeAll(() => {
    item = ItemModel.create(mockItem.name, mockItem.value, mockItem.description);
    orcItem = {
        item: item,
        qtde: 3
    };
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




});