import { useRouter } from "next/router";

export function usePush() {
    const { push } = useRouter();

    function pushToItemsPage() {
        push('/items');
    }


    return {
        pushToItemsPage
    };
}