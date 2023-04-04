import React, {useState} from 'react'


<table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Album</th>
                    <th>Release date</th>
                    <th>Cover Art</th>
                </tr>
                <tr>
                    <th ref={ref} id="0" onClick={handleLike}>DARKSIDE {like}</th>
                    <th>Wars In A Wonderland</th>
                    <th>2021</th>
                    <th><img src="https://i.scdn.co/image/ab67616d0000b27381207f9d9c8eef5f3a62407f" alt="Wars In Wonderland album cover" width="300"></img></th>
                </tr>
                <tr>
                    <th ref={ref} id="1" onClick={handleLike}>SANCTUARY {like}</th>
                    <th>ALL MY FAVOURITE MONSTERS</th>
                    <th>2022</th>
                    <th><img src="https://i1.sndcdn.com/artworks-OSQBRpDaXf0YQlv5-QLTeuA-t500x500.jpg" alt="Sanctuary album cover" width="300"></img></th>
                </tr>
                <tr>
                    <th ref={ref} id="2" onClick={handleLike}>MUTINY {like}</th>
                    <th>Wars In A Wonderland</th>
                    <th>2021</th>
                    <th><img src="https://cdns-images.dzcdn.net/images/cover/1835233081ade1735a188de6dd339583/500x500.jpg" alt="MUTINY single cover" width="300"></img></th>
                </tr>
            </tbody>
        </table> 



