<script lang="ts">
  import { categories } from '$lib/categories';
  import type { ConstellationInfo } from './types';

  export let constellation: ConstellationInfo;
  export let categoryStore: Array<string | number>;
</script>

<form action="">
  <code>{@html constellation.id}</code>
  <h2>{@html constellation.name}</h2>
  <p>{@html constellation.description}</p>
  <ul>
    {#each constellation.items as item}
      <li>{@html item?.title} ({@html item?.type})</li>
    {/each}
  </ul>
  <div class="checkbox-list">
    {#each categories as cat}
      <label class="check" for={`${cat.id}-${constellation.id}`}
        ><input
          type="checkbox"
          value={cat.id}
          id={`${cat.id}-${constellation.id}`}
          bind:group={categoryStore}
        />{@html cat.name}</label
      >
    {/each}
  </div>
</form>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }
  .checkbox-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  label.check {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  input {
    margin: 0;
  }

  form {
    border: 2px black solid;
    padding: 1rem;
    margin: 1rem;
  }
</style>
