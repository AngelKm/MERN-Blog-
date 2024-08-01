import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod iste, neque magni doloremque nihil dolores. Iste quis saepe neque voluptatibus facere quidem aperiam, tempore rerum, veniam minima perspiciatis quibusdam nam enim dolor reiciendis repellat. Accusamus atque neque ex aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut pariatur. Ipsum officiis maiores placeat sapiente praesentium ducimus, eligendi earum et molestiae libero quibusdam aspernatur distinctio, possimus reiciendis commodi id error amet ipsa? Maxime assumenda asperiores aspernatur. Ratione hic id, porro saepe dolorem fugit eligendi commodi, cupiditate praesentium labore, accusantium eveniet alias ab dicta. Ipsa.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sequi ab vitae similique eos voluptate numquam, quis nostrum natus cumque et hic voluptates sed tempore saepe dignissimos perferendis minima reiciendis. Alias asperiores modi, magni in quia recusandae sunt odit aperiam, autem, rem at. Voluptatem deleniti assumenda tempore. Quam, cumque dicta neque illo distinctio amet ea debitis. Eos ducimus blanditiis nulla sapiente dolore, a magnam nobis necessitatibus cum animi aperiam sunt, minus quia sint expedita et saepe voluptatibus eius. Magni amet earum qui voluptas assumenda repellat quae praesentium ipsam temporibus. Iure nostrum nemo saepe ex deserunt? Hic vitae, totam rem, eveniet dolorum ratione cumque quo magni tempora, nostrum iure accusantium voluptate optio.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque quos quaerat recusandae, ea consectetur alias aliquid porro earum culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptates modi placeat ipsam tempore amet sapiente culpa similique obcaecati doloremque deserunt maiores tempora non dolore incidunt esse, explicabo quis laboriosam nulla quasi ipsum reiciendis nam. Quasi esse dicta quod porro, exercitationem incidunt vitae, perferendis vel nam, veritatis nulla reprehenderit nesciunt. Recusandae suscipit non neque minus itaque quam maiores praesentium harum! Architecto corrupti modi officiis possimus! Quidem ducimus ex modi, sed dolorem sint necessitatibus omnis? Quidem culpa alias cumque ut. Assumenda error recusandae veniam omnis eos fugiat corporis consectetur officiis placeat, provident delectus eum aspernatur cum reprehenderit velit qui autem possimus repudiandae vero tempore! Aperiam magni vero reprehenderit ad numquam, laborum ab dicta, eaque, voluptates quidem nisi vitae minus. Voluptas, libero quae dolorum eaque officiis vitae iure, ipsa eius iste mollitia modi provident molestiae vel error odit, perspiciatis ea deleniti nesciunt laborum minus nemo? Ipsum facere a facilis omnis? Aliquid repellat recusandae, itaque temporibus quisquam eum aliquam, iure asperiores, velit veniam vero assumenda? Nemo, inventore unde cum repellat omnis magnam animi repudiandae dolor? Molestias sunt libero placeat magnam aspernatur ipsam vero voluptate amet ut ipsum quod ea ipsa, odio error minima alias voluptates impedit magni. Assumenda dolores delectus excepturi est autem unde repudiandae beatae veritatis quas dolorem labore aliquid maiores recusandae at magnam perferendis molestiae, fugit amet facilis qui fugiat nemo. Molestias, dolore. Eaque necessitatibus iste quia sint doloremque praesentium est soluta blanditiis mollitia tenetur illum quasi, vero in consequatur similique, voluptatum, ad dolor! Velit doloribus beatae obcaecati eaque, tenetur facilis deserunt accusamus error sunt. Perspiciatis blanditiis ea deserunt obcaecati vitae magni veniam perferendis itaque, sit, sequi adipisci doloribus cum recusandae eius minima libero molestiae nesciunt praesentium! Molestias enim aliquam culpa laborum dolore. Accusamus quasi libero nostrum minus reiciendis, consequatur repellat explicabo accusantium voluptatum voluptatem veniam atque obcaecati velit ullam similique!
        </p>
      </div>
    </section>
  )
}

export default PostDetail