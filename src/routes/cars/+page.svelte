<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>

<h2>Rental Car Companies</h2>
<ul>
	{#each data.companies as { name, url }, i}
		<li>
      {#if url}
        <a target="_blank" href="{url}">
          {name}
        </a>
      {:else}
        {name}
      {/if}
		</li>
	{/each}
</ul>
