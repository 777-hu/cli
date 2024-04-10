import React, { Suspense } from 'react';

const ShellApp = React.lazy(() => import("ShellApp/App"));

const App = () => (
	<Suspense fallback="Loading ShellApp">
		<ShellApp  />
	</Suspense>
);

export default App;
