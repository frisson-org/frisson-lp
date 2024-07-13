import cn from 'classnames';
import SocialItem from './SocialItem';
import InstagramSvg from '../svg/InstagramSvg';
import VkSvg from '../svg/VkSvg';
import YoutubeSvg from '../svg/YoutubeSvg';

const Social = ( { classes } ) => {

	const items = [
		{
			id: 's1',
			svg: <InstagramSvg/>,
			link: '#'
		},
		{
			id: 's2',
			svg: <VkSvg/>,
			link: '#'
		},
		{
			id: 's3',
			svg: <YoutubeSvg/>,
			link: '#'
		}
	];

	return (
		<div className={ cn( 'f-social flex fwrap', classes ) }>
			{
				items.map( ( item ) => (
					<SocialItem
						key={ item.id }
						svg={ item.svg }
						link={ item.link }
					/>
				) )
			}
		</div>
	);
}

export default Social;
