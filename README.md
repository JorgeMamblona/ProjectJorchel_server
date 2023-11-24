# ProjectJorchel_server
ServerSide 
<table>
  <caption> <h2>Auth Routes</h2></caption>
  <p>Base URL /auth</p>
  <thead>
    <tr>
      <th>HTTP METHOD</th>
      <th>URI Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td><code>/sign-up</code></td>
      <td>Crear usuario</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/log-in</code></td>
      <td>Inicio de sesión</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/verify</code></td>
      <td>Verificar la sesión</td>
    </tr>
  </tbody>
</table>

<!-- Project routes -->
<table>
  <caption><h2>Project Routes</h2></caption>
  <p>Base URL /projects</p>
  <thead>
    <tr>
      <th>HTTP METHOD</th>
      <th>URI Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/getAllProjects</code></td>
      <td>Ver todos los proyectos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/create</code></td>
      <td>Crear proyecto</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/:project_id</code></td>
      <td>Detalles de proyecto</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/:project_id/edit</code></td>
      <td>Editar proyecto</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/:project_id/delete</code></td>
      <td>Eliminar proyecto</td>
    </tr>
  </tbody>
</table>

<!-- Task routes -->
<table>
  <caption><h2>Task Routes</h2></caption>
  <p>Base URL /task</p>
  <thead>
    <tr>
      <th>HTTP METHOD</th>
      <th>URI Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/getAllTasks</code></td>
      <td>Ver todos las tareas</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/create</code></td>
      <td>Crear tarea</td>
    </tr>
    <tr>
      <td>GET</td>
      <td><code>/:project_id</code></td>
      <td>Detalles de la tarea</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/:project_id/edit</code></td>
      <td>Editar tarea</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/:project_id/delete</code></td>
      <td>Eliminar tarea</td>
    </tr>
  </tbody>
</table>

<!-- Comment routes -->
<table>
  <caption><h2>Comment Routes</h2></caption>
  <p>Base URL /comment</p>
  <thead>
    <tr>
      <th>HTTP METHOD</th>
      <th>URI Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/getAllComments</code></td>
      <td>Ver todos los comentarios</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/create</code></td>
      <td>Crear comentario</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/:comment_id/edit</code></td>
      <td>Editar comentario</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/:comment_id/delete</code></td>
      <td>Eliminar comentario</td>
    </tr>
  </tbody>
</table>
