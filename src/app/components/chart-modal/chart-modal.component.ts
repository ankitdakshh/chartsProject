import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chart } from '../../state/chart.model';

export interface ChartModalData {
  chart: Chart;
  isNew: boolean;
}

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.css'],
})
export class ChartModalComponent implements OnInit {
  chartForm: FormGroup;
  chartTypes: string[] = ['line', 'spline', 'area', 'bar', 'pie'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChartModalData
  ) {
    this.chartForm = this.fb.group({
      name: [data.chart.name, Validators.required],
      type: [data.chart.type, Validators.required],
      color: [data.chart.color, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.chartForm.valid) {
      this.dialogRef.close({ ...this.data.chart, ...this.chartForm.value });
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
