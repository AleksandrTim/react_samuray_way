import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatuc component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='lol kek cheburek' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('lol kek cheburek');
    });

    test('status length after creation', () => {
        const component = create(<ProfileStatus status='lol kek cheburek' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('status length after creation INPUT', () => {
        const component = create(<ProfileStatus status='lol kek cheburek' />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test('status length after creation SPAN', () => {
        const component = create(<ProfileStatus status='lol kek cheburek' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('lol kek cheburek');
    });

    test('input should be displayed in editMode instead of the SPAN', () => {
        const component = create(<ProfileStatus status='lol kek cheburek' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('lol kek cheburek');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='lol kek cheburek' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});