import { Component } from 'react';

export class ToDo extends Component {
    state = {
        inputText: "",
        ToDoList: []
    }

    onSubmitEvent(e) {
        e.preventDefault();
    }

    onChangeEvent(e) {
        this.setState({inputText: e});
    }

    crossedWord(e) {
        const liItem = e.target;
        liItem.classList.toggle("crossed");
    }

    AddItem(e) {
        if (e === "") {
            alert("Please enter an item!");
        }
        else {
            let ToDoArray = this.state.ToDoList;
            ToDoArray.push(e);
            this.setState({
                inputText: "",
                ToDoList: ToDoArray
            });
        }
    }

    DelItem(e) {
        let ToDoArray = this.state.ToDoList;
        ToDoArray = [];
        this.setState({
            ToDoList: ToDoArray
        })
    }

    delOneItem(e) {
        let ToDoArray = this.state.ToDoList;
        console.log(e.index);
        console.log(ToDoArray);
        ToDoArray.splice(e.index, 1);
        this.setState({ToDoList: ToDoArray});
    }

    render() {
        return (
            <div className="main-container">
                <form onSubmit={this.onSubmitEvent}>
                    <div className="container">
                        <input onChange={ (e) => this.onChangeEvent(e.target.value) } type="text" value={this.state.inputText} placeholder="What do you want to do today?" />
                    </div>
                    <div className="container">
                        <button onClick={() => this.AddItem(this.state.inputText)} className="btn btnAdd">ADD</button>
                    </div>
                    <div className="container">
                        <ul>
                            {this.state.ToDoList.map((item, index) => (
                                <li key={index} onDoubleClick={(e) => this.delOneItem({index})} onClick={this.crossedWord}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container">
                        <button onClick={() => this.DelItem()} className="btn btnDel">DELETE</button>
                    </div>
                </form>
            </div>
        )
    }
}