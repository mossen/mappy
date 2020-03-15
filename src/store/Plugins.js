export default [
  // Call filter mutation whenever keyword or value get changed
  store => {
    store.subscribe(mutation => {
      if (["setKeyword", "setValue"].includes(mutation.type)) {
        store.commit("handleFilter");
      }
    });
  }
];
