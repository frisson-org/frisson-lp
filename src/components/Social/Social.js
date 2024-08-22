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
			link: 'https://www.instagram.com/frisson.journal'
		},
		{
			id: 's2',
			svg: <VkSvg/>,
			link: 'https://vk.com/frisson.journal'
		},
		{
			id: 's3',
			svg: <YoutubeSvg/>,
			link: 'https://youtube.com/@frisson.journal?si=Z8zYrkdgFa2gLSL9'
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
