import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import "./CastDetails.css";

const CastDetails = () => {
    const cast = useLoaderData()
    console.log(cast)
    return (
        <div className='castDetails__bg'>
            <Header/>
            <div className='pt-[146px] px-[100px] grid grid-cols-2 items-center'>
                <div className='img__name'>
                    <h2>{cast.name}</h2>
                    <img src={cast.image} alt="" />
                </div>
                <div className='details'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis natus ab quam cum, dolores quo asperiores veritatis quidem atque repudiandae suscipit praesentium velit sunt ex? Eveniet ab officia quae quod, explicabo velit magni. Sunt, facilis, nihil fugiat eius architecto numquam voluptatum mollitia voluptas minus obcaecati voluptates officia voluptate ipsa nemo. Alias magni, voluptatem sit doloribus aliquid cumque, consequuntur sunt vero consequatur vel inventore veniam obcaecati sequi harum odio, repellendus eaque voluptatum quam maxime ipsa? Ad maxime necessitatibus tenetur quo sunt eos, distinctio, corrupti, minus aliquid voluptas rem consectetur rerum earum deserunt ab et facilis. Ea praesentium optio enim, animi quaerat corporis unde officiis, voluptas vel alias quia! Aspernatur minima nobis alias vel modi architecto voluptates nisi explicabo, sunt laboriosam, fugiat animi, harum eius. Molestiae tempore inventore adipisci totam, magnam laudantium sit repellat ipsam accusantium fugiat harum, minima architecto similique animi doloremque! Voluptatem, odio quidem corporis eius repudiandae incidunt iure ratione consectetur nam aut pariatur ut perspiciatis quasi quis inventore quo eum a rem quae distinctio! Reiciendis qui debitis nam obcaecati repudiandae esse, rerum cum? Consequuntur aperiam maiores fugiat voluptas exercitationem voluptatum culpa quas possimus excepturi dignissimos nobis vero rerum mollitia dolorum eius voluptatibus ab, quasi earum quidem soluta asperiores neque. Dolorem atque vero dolorum pariatur, iste vel debitis at maxime suscipit alias dolore iure nobis porro fugit sapiente fuga nisi labore praesentium incidunt ipsam quo esse doloribus itaque? Neque, dolorum labore voluptatum veritatis excepturi, nihil illo, modi hic architecto numquam est id eaque iusto magnam qui. Voluptatem ad sapiente illum explicabo quod aperiam impedit exercitationem repellendus velit iure assumenda facilis corrupti dolor pariatur modi harum, odit quos repudiandae ex ratione optio deserunt dolorem doloribus aspernatur! Consequatur architecto incidunt commodi aut fugiat repudiandae illum suscipit quo ad. Totam error enim aliquam, dicta, voluptatum sunt eius ratione ea, in recusandae alias. Officia eligendi, nisi nam, nesciunt quam obcaecati, suscipit maiores voluptatem rem consequuntur rerum? Pariatur voluptatum dolores aut. Repudiandae adipisci earum nisi fugit similique illo nesciunt maiores sapiente eveniet dolor id sunt et pariatur deserunt ex quibusdam, dignissimos tempora itaque ea nulla, nihil at nam facere ullam. Voluptas ratione sed aut soluta atque itaque assumenda voluptatibus mollitia rerum, eos, repudiandae quibusdam modi! Incidunt facere voluptas officiis dolores, maiores sit libero laboriosam repudiandae mollitia illum eligendi autem exercitationem suscipit. Commodi fugit rerum praesentium aliquam tempora cupiditate earum magni. Animi possimus nobis, quisquam voluptate quidem doloribus. Maiores illo ipsam reiciendis hic placeat odit expedita quas neque accusamus! Amet perspiciatis consequatur exercitationem, eius neque minus ut commodi animi eligendi, veritatis ab rerum libero aut eveniet, vero nostrum nam esse doloremque deleniti consectetur impedit vitae magni! Explicabo obcaecati voluptas unde iste non illum. Non magni esse minima beatae atque itaque amet nisi fugiat voluptatum voluptas! Sunt quam necessitatibus repellat ipsum voluptatum, fugit dolores numquam eligendi est culpa delectus atque error quaerat suscipit blanditiis voluptatibus tenetur impedit! Architecto vel pariatur enim ipsam provident fugit, dignissimos corrupti debitis officia quae alias quos itaque tempore, officiis atque deserunt repellat reiciendis soluta quia. Minus tempore voluptates atque molestiae optio.</p>
                </div>
            </div>
        </div>
    );
};

export default CastDetails;