<script lang="ts">
  import { writable } from 'svelte/store';
  import type { PageData } from './$types';
  import { categories } from '$lib/categories';
  import Constellation from '$lib/constellation.svelte';
  import { onMount } from 'svelte';
  import MSelect from '$lib/mSelect.svelte';

  export let data: PageData;
  function paginate<T>(arr: T[], size: number) {
    return arr.reduce<T[][]>((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);

      return acc;
    }, []);
  }
  const constellations = data.catData;
  const pages = paginate(constellations, 24);
  let groups = writable(
    Object.entries(data.startingData).length > 0
      ? data.startingData
      : Object.fromEntries(constellations.map((c) => [c.id, []]))
  );
  let selectedPage = 0;
  let selectedTab = 0;
  onMount(() => {
    groups.subscribe(async (g) => {
      await fetch('/update', {
        method: 'POST',
        body: JSON.stringify(g),
      });
    });
  });
</script>

<main>
  <nav>
    <button disabled={selectedTab == 0} on:click={() => (selectedTab = 0)}>Constellations</button>
    <button disabled={selectedTab == 1} on:click={() => (selectedTab = 1)}>Categories</button>
    <button disabled={selectedTab == 2} on:click={() => (selectedTab = 2)}
      >Constellations without Category</button
    >
  </nav>
  {#if selectedTab == 0}
    <div class="tab">
      <h2>Constellations</h2>
      <div>
        <button disabled={selectedPage <= 0} on:click={() => (selectedPage = selectedPage - 1)}
          >Prev</button
        >
        {#each { length: pages.length } as _, i}
          <button disabled={selectedPage == i} on:click={() => (selectedPage = i)}>{i}</button>
        {/each}
        <button
          disabled={selectedPage >= pages.length - 1}
          on:click={() => (selectedPage = selectedPage + 1)}>next</button
        >
      </div>

      {#each pages[selectedPage] as item}
        <div>
          <Constellation bind:categoryStore={$groups[item.id]} constellation={item} />
        </div>
      {/each}
      <div>
        <button
          disabled={selectedPage <= 0}
          on:click={() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            selectedPage = selectedPage - 1;
          }}>Prev</button
        >
        {#each { length: pages.length } as _, i}
          <button
            disabled={selectedPage == i}
            on:click={() => {
              window.scrollTo({ top: 0, behavior: 'auto' });
              selectedPage = i;
            }}>{i}</button
          >
        {/each}
        <button
          disabled={selectedPage >= pages.length - 1}
          on:click={() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            selectedPage = selectedPage + 1;
          }}>next</button
        >
      </div>
    </div>
  {/if}
  {#if selectedTab == 1}
    <div>
      <h2>Categories</h2>
      <MSelect constellationInfo={constellations} {groups} />
    </div>
  {/if}
  {#if selectedTab == 2}
    {#each Object.keys($groups).filter((k) => $groups[k].length === 0) as key}
      <div>
        <Constellation
          bind:categoryStore={$groups[key]}
          constellation={constellations.find((c) => c.id == parseFloat(key))}
        />
      </div>
    {/each}
  {/if}
</main>

<style>
  :global(main) {
    max-width: 90ch;
    margin: auto;
  }
  button {
  }
</style>
