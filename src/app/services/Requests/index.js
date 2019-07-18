
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { get, has } from 'lodash';

function Requests() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [config, setConfig] = useState({});
  const loadingTimer = useRef();
  const successTimer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      console.log('inside ', loading)
      setLoading(true);
      setSuccess(false)
      try {
        if (has(config, 'url')) {
          const result = await axios({
            method: get(config, 'method', 'get'),
            url: `${get(config, 'url', '')}`,
            // headers: { Authorization: 'Bearer ' }
            // add data
          });
          setData(result.data);
        }

      } catch (e) {
        setError(true);
      } finally {
        const animationDelay = get(config, 'delay', 0);
        // wait animation delay before removing loading state
        loadingTimer.current = setTimeout(() => {
          
          setSuccess(true);
          loadingTimer.current = setTimeout(() => { 
            setSuccess(false);
            setLoading(false);
          }, 250)
        }, animationDelay)
      }

    };
    fetchData();
    // Clear
    return () => {
      clearTimeout(loadingTimer.current);
      clearTimeout(successTimer.current);
    };
  }, [config]);

  return [{ data, loading, error, success }, setConfig];
}


export default Requests;