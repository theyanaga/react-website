import React, {useRef, useState} from "react";
import {ToDoItem} from "./ToDoItem";

export interface Item {
    id: number;
    name: string;
    isCompleted: boolean;
}

export class Objectives extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: "",
            objectives: [],
            nextId: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
    }

    handleCompleteTask(changedId: number) {
        const newObjectives: Item[] = [];
        this.state.objectives.map((i:Item) => {
            if (i.id === changedId) {
                i.isCompleted = true;
            }
            newObjectives.push(i);
        });
        this.setState({objectives: newObjectives});
        console.log(window.location.pathname)
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event: any) {
        const item: Item = {
            id: this.state.nextId,
            name: this.state.value,
            isCompleted: false,
        }
        this.setState({nextId: this.state.nextId + 1})
        this.setState({objectives: this.state.objectives.concat(item)});
        event.preventDefault();
        this.setState({value: ""})
    }

    render() {
        return (
            <div>
                <div className="mx-auto py-5 relative text-4xl text-lime-400">
                    Add an item to your to-do list.
                    <form className="py-10" onSubmit={this.handleSubmit}>
                        <input id="objective"
                               className=" mx-auto max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               value={this.state.value}
                               onChange={event => this.handleChange(event)}
                        />
                    </form>
                </div>
                <div className="mx-auto relative text-4xl text-lime-400">
                    These are your current items.
                    <div className="py-10">
                        {this.state.objectives.map((i: Item) => {
                            if (!i.isCompleted) {
                                return <ToDoItem key={i.id} handleCompleteTask={this.handleCompleteTask} item={i}/>
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        );
    }

}