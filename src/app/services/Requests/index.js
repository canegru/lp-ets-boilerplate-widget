
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { get, has } from 'lodash';

function Requests() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [config, setConfig] = useState({});


  useEffect(() => {
    let loadingTimer = null;
    let successTimer = null;
    const fetchData = async () => {
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
        loadingTimer = setTimeout(() => {
          
          setSuccess(true);
          loadingTimer = setTimeout(() => { 
            setSuccess(false);
            setLoading(false);
          }, 250)
        }, animationDelay)
      }

    };
    fetchData();
    // Clear
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(successTimer);
    };
  }, [config]);

  return [{ data, loading, error, success }, setConfig];
}


export default Requests;