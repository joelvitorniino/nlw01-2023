import './Habit.css'

interface HabitProps {
    completed: number;
}

export default function Habit(props: HabitProps) {
    return (
        <div className='habit'>{props.completed}</div>
    )
}