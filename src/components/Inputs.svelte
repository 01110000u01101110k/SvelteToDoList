<script>
  import {data} from '../store/mainStore.js'
  export let inputName = 'empty';

  let value = '';
  const setNewNote = () => {
    data.update(prev => [{note: value, isDone: false}, ...prev])
    value = ''
  }
</script>
<style>
	.myInput{
		min-width: 150px;
	}
</style>
<div>
  <form on:submit|preventDefault={setNewNote}>
    <label>
      <p>{inputName}</p>
      <input type="text" class="myInput" bind:value={value}>
    </label>
  </form>
</div>