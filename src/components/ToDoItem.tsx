import React, {useEffect} from "react";
import {Item} from "./Objectives";

export interface TodoProps {
    item: Item;
    handleCompleteTask: any;
}

export class ToDoItem extends React.Component<TodoProps, any> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {
            id: this.props.item.id,
            name: this.props.item.name,
            isCompleted: this.props.item.isCompleted
        }

    }

    render() {
        return(
            <div className="py-5">
                <div className="border-2 max-w-md mx-auto border-gray-200 rounded-lg text-sm text-lime-300">
                    <div className="flex px-5 py-5">
                        <div className="grow text-gray-700">
                            {this.state.name}
                        </div>
                        <div className="border-2 border-gray-500 rounded-full bg-green-400 hover:bg-green-800 w-24">
                            <button onClick={() => this.props.handleCompleteTask(this.state.id)} className="text-gray-800">
                                Complete
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}