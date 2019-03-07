import React from "react";

export default class Container extends React.Component {
    render() {
      return (
        <div className='container'>
            <Card
              checkForDuplicates={this.props.checkForDuplicates}
              score={this.props.score}
            />
        </div>
      )
    }
}

class Card extends React.Component { 
    render() {
        const images = [
            {
              link: 'https://photo2.foodgawker.com/wp-content/uploads/2019/03/3393004.jpg',
              key: 0
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/02/3387319.jpg',
              key: 2
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/02/3384831.jpg',
              key: 3
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/02/3383607.jpg',
              key: 4
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/02/3382343.jpg',
              key: 5
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/02/3380227.jpg',
              key: 6
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2019/01/3359963.jpg',
              key: 7
            },
            {
              link: 'https://photo2.foodgawker.com/wp-content/uploads/2018/12/3350447.jpg',
              key: 8
            },
            {
              link: 'https://photo2.foodgawker.com/wp-content/uploads/2019/01/3362759.jpg',
              key: 9
            },
            {
              link: 'https://photo2.foodgawker.com/wp-content/uploads/2018/12/3355340.jpg',
              key: 10
            },
            {
              link: 'https://photo.foodgawker.com/wp-content/uploads/2018/10/3323959.jpg',
              key: 11
            },
            {
              link: 'https://photo2.foodgawker.com/wp-content/uploads/2018/09/3302988.jpg',
              key: 12
            },
        ];

    const handleClick = (event, key) => {
        event.preventDefault();
        this.props.checkForDuplicates(key);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(images);
      return images.map((item, key) => (
          <div
              className="card"
              key={item.key}
              value={item.id}
              onClick={(event) => handleClick(event, key)} 
          >
          <img src={item.link} alt="donut"></img>
          </div>
      ));
    } 
}
