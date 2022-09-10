<template>

  <div class="card w-100 text-white bg-secondary" >
    <div class="card-body d-flex p-2" style="width: 50rem ; height:35rem ;">

      <form >
          <input type="text" class="form-control add-task" style="width: 45rem; margin-left:2rem; margin-top: 2rem;" placeholder="New Task...">
          <div class="todoList">

            <div class="todoItem">
              <input class="check" type="checkbox">
              <span style="color: black">Task1</span>

              <button type="button" class="btn btn-danger" style="margin-left: 39rem; margin-top:-3rem;">Delete</button>
            </div>
       
            <div class="todoItem">
              <input class="check" type="checkbox">
              <span style="color: black ; text-decoration: line-through">Task2</span>
              <button type="button" class="btn btn-danger" style="margin-left: 39rem; margin-top:-3rem;">Delete</button>

              </div>

          </div>
       </form>

 


    

   
      <!-- <div class="ml-auto p-2 flex-column d-flex">
        <h5 class="card-title p-2">Card title</h5>
      </div> -->

      <!-- <div class="flex-column">
        <p class="card-text">Created at: dd/mm/yyyy</p>
        <p class="card-text">Created at: dd/mm/yyyy</p>
      </div>

      <div class="ml-auto p-2 flex-column d-flex">
        <a href="#" class="btn btn-light p-2">Delete</a>
        <a href="#" class="btn btn-light p-2">Update</a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
  .todoList{
    margin: 25px 0
   
  }
  .check{
margin-right: 1rem;
  }

  .todoItem{
    background-color:rgb(245, 246, 245) ;
    width: 45rem;
    height: 3.5rem;
    padding: 15px;
    margin: 5px 0;
    margin-left:2rem; 
  
  }

 </style>
