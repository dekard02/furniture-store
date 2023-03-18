import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar, Box, Card, CardContent } from "@mui/material";
export default function LoadingSkeleton({
  columns = 5,
  columnGap = 5,
  length = 10,
}) {
  return (
    <div className={`grid grid-cols-${columns} gap-x-${columnGap}`}>
      {new Array(length).fill(0).map((el, index) => {
        return (
          <div key={index}>
            <Card style={{ marginBottom: 12 }}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={200}
                width="100%"
              >
                <div style={{ paddingTop: "57%" }} />
              </Skeleton>
              <CardContent>
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    animation="wave"
                    style={{ marginBottom: 6 }}
                    height={10}
                    width="80%"
                  />
                  <Skeleton animation="wave" height={30} width="80%" />
                </React.Fragment>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
