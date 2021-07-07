<script>
  import {data} from '../store/mainStore.js'
  
  const markAsDone = (item) => {
    let newArr = $data.map(element => element.note === item.note ?  Object.assign({}, element, {isDone: !element.isDone}) : element)
    data.update(prev => prev = newArr)
  }
  $:countDoneNotes = $data.filter(item => item.isDone)
</script>
<style>
  .checkbox{
    margin: 0;
  }
  .noteWrap{
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid rgb(34, 34, 34);
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
  }
  .noteItem{
    margin: 0;
  }
  .noteDone{
    color: rgb(43, 156, 43);
  }
  .noteNotDone{
    color: rgb(156, 51, 43);
  }
</style>
<div>
  {countDoneNotes.length} / {$data.length}
  {#each $data as item}
  <div class="noteWrap">
    <input type="checkbox" class="checkbox" on:click={markAsDone(item)}>
    <p class="noteItem">{item.note}</p>
    <p class={item.isDone ? 'noteDone' : 'noteNotDone'}>{#if item.isDone} Done {:else} Not Done {/if}</p>
  </div>
  {/each}
</div>