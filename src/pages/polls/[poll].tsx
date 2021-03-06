import * as React from 'react';

import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Poll } from '@utils/dataTypes';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const res = await fetch(`http://localhost:3000/api/polls/${context.params.poll}`);
	const data = await res.json();
	return { props: { poll: data } };
};

const PollPage = ({ poll }: { poll: Poll }): JSX.Element => {
	const [radioChecked, setRadioChecked] = React.useState(poll.choices[0]);
	const [rankedChoices, setRankedChoices] = React.useState(poll.choices);

	const renderRoundedClasses = (i: number): string => {
		if (i === 0) return `rounded-tl-md rounded-tr-md`;
		else if (i === poll.choices.length - 1) return `rounded-bl-md rounded-br-md`;
		else return ``;
	};

	const reorderChoices = (result: DropResult) => {
		if (!result.destination) return;
		if (result.destination.index === result.source.index) return;
		const items = Array.from(rankedChoices);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setRankedChoices(items);
	};

	return (
		<main className='container flex flex-col justify-center w-full min-h-content bg-base-primary'>
			<p className='text-base font-medium leading-6 text-gray-900'>{poll.title}</p>
			<p className='text-sm leading-5 text-gray-500'>{poll.description}</p>
			<p className='text-sm leading-5 text-gray-500'>Poll types: {poll.types[0]}</p>
			<p className='text-sm leading-5 text-gray-500'>User: {poll.user_id}</p>
			{poll.types.includes(`First Past The Post`) ? (
				<fieldset>
					<legend className='sr-only'>First Past The Post Voting</legend>
					<div className='-space-y-px bg-white rounded-md'>
						{poll.choices.map((choice, i) => (
							<div
								key={i}
								className={`flex items-center border ${renderRoundedClasses(i)} ${
									radioChecked === choice ? `bg-indigo-50 border-indigo-200 z-10` : `border-gray-200`
								}`}
							>
								<input
									id={choice}
									type='radio'
									className='w-4 h-4 ml-4 text-indigo-600 border-gray-300 cursor-pointer focus:ring-indigo-500'
									onChange={e => setRadioChecked(e.currentTarget.id)}
									checked={radioChecked === choice}
								/>
								<label htmlFor={choice} className='flex flex-col w-full py-4 ml-3 cursor-pointer'>
									<span className={`block text-sm font-medium ${radioChecked === choice ? `text-indigo-700` : `text-gray-500`}`}>
										{choice}
									</span>
								</label>
							</div>
						))}
					</div>
				</fieldset>
			) : null}
			{poll.types.includes(`First Past The Post`) ? (
				<DragDropContext onDragEnd={reorderChoices}>
					<Droppable droppableId='ranked'>
						{droppableProvided => (
							<ul className='border rounded-md' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
								{rankedChoices.map((choice, i) => (
									<Draggable key={choice} draggableId={choice} index={i}>
										{draggableProvided => (
											<li
												ref={draggableProvided.innerRef}
												{...draggableProvided.draggableProps}
												{...draggableProvided.dragHandleProps}
												className='w-full h-10'
											>
												<p>{choice}</p>
											</li>
										)}
									</Draggable>
								))}
								{droppableProvided.placeholder}
							</ul>
						)}
					</Droppable>
				</DragDropContext>
			) : null}
		</main>
	);
};

export default PollPage;
