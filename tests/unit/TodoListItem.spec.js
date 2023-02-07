import TodoListItem from "@/components/TodoListItem";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import Sinon from "sinon";

describe('TodoListItem', () => {
    let component;
    let taskText = 'BOOP';
    let onDelete = Sinon.spy();
    let id = 1;

    beforeEach(() => {
        component = shallowMount(TodoListItem, {
            props: {
                text: taskText,
                onDelete,
                id
            }
        });
    });

    it('should render the task text', () => {
        expect(component.text()).to.include(taskText)
    } );

    it('should call the on delete handler', () => {
        component.find('.delete-btn').trigger('click');
        expect(onDelete.calledOnce);
    } );
});
