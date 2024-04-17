export async function storefront(query, variables = []) {
    const response = await fetch(
      `https://aleph-ecomm.myshopify.com/api/2024-04/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": `4ce351236a3d9922a3de8bcee9c62d1e`,
        },
        body: JSON.stringify({ query, variables }),
      }
    );
  
    console.log(response.json());
    return response.json();
  }