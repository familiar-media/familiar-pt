<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{data.title}

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
