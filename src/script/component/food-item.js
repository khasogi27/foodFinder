class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
              * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 50px;
                    overflow: hidden;
                }
                
                .fan-art-food {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .food-info {
                    padding: 35px;
                    background-color: white;
                }
                
                .food-info > h2 {
                    font-weight: lighter;
                    text-align: center;
                    font-size: 50px;
                    padding: 20px;
                    font-family: 'Times New Roman', Times, serif;
                }
                
                .food-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
            <div class="food-info">
                <h2>${this._food.strMeal}</h2>
                <p>${this._food.strInstructions}</p>
            </div>`;
    }
}

customElements.define("food-item", FoodItem);