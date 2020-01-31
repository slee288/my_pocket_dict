import React, {Component} from "react";
import axios from "axios";

class List extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            vocabList: []
        }
    };

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of vocabulary from the Express App
    async getList() {
        const url = "http://localhost:5000/api/v1/vocabs";

        // exclusively for heroku production
        // const url = "https://shielded-refuge-43860.herokuapp.com/api/v1/vocabs";
        
        const res = await axios.get(url);
        const vocabList = res.data.data;
        this.setState({vocabList});
    }

    render() {
        const {vocabList} = this.state;

        return (
            <div className="App">
                <h1>List of Vocabs</h1>
                {vocabList.length ? (
                    <div>
                        {vocabList.map((vocab) => {
                            return (
                                <div>
                                    <h2>{vocab.word}</h2>
                                    <h4>{vocab.tense}</h4>
                                    <h3>{vocab.definition}</h3>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No Words Found</h2>
                    </div>
                )
            }
            </div>
        );
    }
}

export default List;
