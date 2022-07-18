import { NextPage } from "next";
import { BudgetCard } from "../components/Budget/BudgetCard";
import { Layout } from "../components/template/Layout";
import { useOrc } from "../data/hooks/useOrc";
import { OrcModel } from "../models/OrcModel";

const Budget: NextPage = () => {

    const { orcamento } = useOrc();

    return (
        <Layout tabTitle="Orçamento">
            <BudgetCard orc={orcamento ? orcamento : OrcModel.create("", "")} />
        </Layout>
    );
};

export default Budget;