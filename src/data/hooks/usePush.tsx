import { useRouter } from "next/router";

export function usePush() {
    const { push } = useRouter();

    function pushToItemsPage() {
        push('/items');
    }

    function pushToIdentificationPage() {
        push('/');
    }

    function pushToBudgetPage() {
        push('/budget');
    }


    return {
        pushToItemsPage,
        pushToIdentificationPage,
        pushToBudgetPage
    };
}