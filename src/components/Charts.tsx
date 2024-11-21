import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { colorPalette } from "../theme/colors";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { pieData, pieSize, scatterData } from '../mockData/chartMockData';
import { useTheme } from "@mui/material/styles";
import "./styles/chartStyles.css";

const Charts: React.FC = () => {
    const theme = useTheme();

    const currentThemeMode = theme.palette.mode;

    return (
        <div id="charts-container">
            <Container id="chart-row">
                {/* Bar Chart */}
                <Box
                    id="chart-box"
                    sx={{
                        width: 400,
                        height: 300,
                        outlineColor: colorPalette[currentThemeMode].text,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, fontWeight: "bold" }}
                    >
                        Bar Chart
                    </Typography>
                    <BarChart
                        xAxis={[
                            { scaleType: "band", data: ["group A", "group B", "group C"] },
                        ]}
                        series={[
                            { data: [4, 3, 5] },
                            { data: [1, 6, 3] },
                            { data: [2, 5, 6] },
                        ]}
                        width={500}
                        height={300}
                    />
                </Box>
                {/* Pie Chart */}
                <Box
                    id="chart-box"
                    sx={{
                        width: 400,
                        height: 300,
                        outlineColor: colorPalette[currentThemeMode].text,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, fontWeight: "bold" }}
                    >
                        Pie Chart
                    </Typography>
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.value}%`,
                                arcLabelMinAngle: 35,
                                arcLabelRadius: '60%',
                                ...pieData,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fontWeight: 'bold',
                            },
                        }}
                        {...pieSize}
                    />
                </Box>
                {/* Scatter Chart */}
                <Box
                    id="chart-box"
                    sx={{
                        width: 500,
                        height: 300,
                        outlineColor: colorPalette[currentThemeMode].text,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, fontWeight: "bold" }}
                    >
                        Scatter Chart
                    </Typography>
                    <ScatterChart
                        width={600}
                        height={300}
                        series={[
                            {
                                label: 'Series A',
                                data: scatterData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                            },
                            {
                                label: 'Series B',
                                data: scatterData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                            },
                        ]}
                    />
                </Box>
            </Container>
            <Container id="chart-row">
                {/* Line Chart */}
                <Box
                    id="chart-box"
                    sx={{
                        width: 1200,
                        height: 300,
                        outlineColor: colorPalette[currentThemeMode].text,
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, fontWeight: "bold" }}
                    >
                        Line Chart
                    </Typography>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                            },
                            {
                                data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                            },
                            {
                                data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                                valueFormatter: (value) => (value == null ? '?' : value.toString()),
                            },
                        ]}
                        height={200}
                        margin={{ top: 10, bottom: 20 }}
                    />
                </Box>
            </Container>
        </div>
    );
};

export default Charts;
