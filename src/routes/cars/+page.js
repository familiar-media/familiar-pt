export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch(`/content/data.json`);
  const data = await res.json();
  const cars = data.find(({ id }) => (id === 'car-rental'))
  return {
    title: `Title goes here`,
    content: `Content goes here`,
    companies: cars.companies,
  };
}
