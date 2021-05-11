import React, { useState, useEffect } from "react";

const withDataFetching = (WrappedComponent) => {
  const WithDataFetching = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const tickets = await fetch(props.dataSource);
          console.log(tickets);
          const ticketsJSON = await tickets.json();
          setData(ticketsJSON);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(err.message);
        }
      };

      fetchData();
      console.log(data);
    }, [data, props.dataSource]);

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;
  return WithDataFetching;
};

export default withDataFetching;
