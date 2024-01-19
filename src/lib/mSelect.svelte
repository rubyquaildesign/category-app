<script lang="ts">
  import { get, writable, type Writable } from 'svelte/store';
  import { categories } from './categories';
  import Multiselect from 'svelte-multiselect';
  import type { ConstellationInfo } from './types';
  import { onMount } from 'svelte';
  export let groups: Writable<Record<string, number[]>>;
  export let constellationInfo: ConstellationInfo[];
  let data = constellationInfo.map((c) => ({ label: `${c.id} - ${c.name}`, id: c.id }));
  let selected: any = [];
  const categoryContents = writable(
    categories.map((c) => ({
      cat: c,
      values: Object.entries(get(groups))
        .filter(([id, cat]) => {
          return cat.includes(c.id);
        })
        .map(([key, val]) => ({
          label: `${key} - ${constellationInfo.find((f) => f.id == key).name}`,
          id: key,
        })),
    }))
  );

  console.log(get(categoryContents));
  onMount(() => {
    categoryContents.subscribe((cat) => {
      groups.update((g) => {
        let nG = {};
        for (let cnID in g) {
          const categories = cat
            .filter((val) => val.values.some((v) => v.id == cnID))
            .map((cat) => cat.cat.id);
          nG[cnID] = categories;
        }
        return nG;
      });
    });
  });
</script>

<div>
  {#each $categoryContents as cat}
    <h3>{cat.cat.name}</h3>
    <Multiselect
      bind:selected={cat.values}
      options={data}
      --sms-text-color="black"
      --sms-bg="white"
      on:change={() => console.log(selected)}
    />
  {/each}
</div>

<style>
  :global(*) {
    --sms-color: black;
    --sms-bg: white;
  }
</style>
