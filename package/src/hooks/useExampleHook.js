import useCurrentShop from "@reactioncommerce/admin-core/hooks/useCurrentShop";

/**
 * @method useExampleHook
 * @summary useProduct hook
 * @returns {Object} Result containing the product and other helpers for managing that product
 */
function useExampleHook() {
  const { shop, shopId } = useCurrentShop();

  return {
    shop,
    shopId
  };
}

export default useExampleHook;
