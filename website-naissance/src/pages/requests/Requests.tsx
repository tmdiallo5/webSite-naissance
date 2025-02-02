import ActionButton from "@/components/shared/ActionButton";
import PageFilter from "@/components/shared/PageFilter";
import StatusBadge from "@/components/shared/StatusBadge";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { search } from "@/services";
import { formatDate } from "@/utils";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Requests() {
  const {
    state,
    updateTitle,
    setRequests,
    updateRequestStatus,
    filterRequests,
  } = useContext(GlobalApplicationContext);

  const { requests = [], requestsFilter = "" } = state;

  const getRequests = async () => {
    if (!requests || requests.length) {
      const data = await search("requests");
      setRequests(data);
    }

    //console.log("Données récupérées :", data);

    updateTitle({ title: "Demandes" });
  };

  useEffect(() => {
    getRequests();
  }, []);
  console.log("State après setRequests :", state);
  return (
    <>
      <PageFilter
        btnLabel="Nouvelle demande"
        btnPath={"/private/demandes/nouvelle-demande"}
        inputPlaceHolder="Rechercher une demande"
        action={filterRequests}
      />

      {requests && requests.length ? (
        <div>
          {requests
            .filter((item: any) => {
              if (requestsFilter && requestsFilter.length) {
                const {
                  parent: { lastName, email },
                  child: { lastName: childLastName },
                } = item;
                return (
                  lastName
                    .toLowerCase()
                    .includes(requestsFilter.toLowerCase()) ||
                  email.toLowerCase().includes(requestsFilter.toLowerCase()) ||
                  childLastName
                    .toLowerCase()
                    .includes(requestsFilter.toLowerCase())
                );
              } else {
                return item;
              }
            })
            .map((item: any, index: number) => (
              <article
                key={item.id}
                className={`grid grid-cols-12 border-t items-center ${
                  index % 2 === 0 ? "bg-gray-200" : null
                }`}
              >
                <span className={` p-2`}>{formatDate(item.date)}</span>
                <span className={` p-2 col-span-2 flex flex-col`}>
                  <span>{item.child.firstName}</span>
                  <span className="uppercase">{item.child.lastName}</span>
                </span>
                <span className={` p-2`}>
                  {item?.child?.birthDate
                    ? formatDate(item.child.birthDate)
                    : null}
                </span>

                <span className={` p-2 col-span-2 flex flex-col`}>
                  <span>{item.parent.firstName}</span>
                  <span className="uppercase">{item.parent.lastName}</span>
                </span>
                <span className={` p-2 col-span-2 flex flex-col`}>
                  <span>{item.parent.email}</span>
                  <span className="uppercase">{item.parent.phone}</span>
                </span>

                <StatusBadge status={item.status || "NEW"} />

                <ActionButton
                  classes="p-2 col-span-2 "
                  action={updateRequestStatus}
                  id={`${item.id}`}
                ></ActionButton>
              </article>
            ))}
        </div>
      ) : (
        <pre>{JSON.stringify(state, null, 2)}</pre>
      )}
    </>
  );
}

export default Requests;
