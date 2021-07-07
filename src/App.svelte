<script>
	import Inputs from './components/Inputs.svelte'
	import DataList from './components/DataList.svelte'
</script>

<main>
	<Inputs inputName="Добавить новую заметку" />
	<DataList/>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
	}
</style>