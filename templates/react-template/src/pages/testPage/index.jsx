import React from 'react';
import { useOutlet } from 'react-router-dom';
import '../../style/commonStyles.scss'
import CommonHeader from '../../components/CommonHeader';
import { testHeaderConfiguration } from '../../constants/routerConstants';

function TestPage() {
	const outlet  = useOutlet()

  return (
    <div className='common'>
		<CommonHeader headerConfiguration={testHeaderConfiguration} />
		{outlet}
	</div>
  );
}

export default TestPage;
