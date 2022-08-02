import { useState, useEffect } from 'react';

import { uuid } from '../../commons/utils/GenerateUuid';

export const useModalPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`modal-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    document.getElementsByTagName('body')[0].append(div);
    setLoaded(true);

    // clean up
    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
