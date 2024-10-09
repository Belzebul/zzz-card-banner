import * as jane from './data/Jane_data.json';
import { ServiceDiscs } from './lib/importer/hoyolab_parser';
import { Disc, DiscSet, Stat } from './lib/models/Disc';
import { HOYO_MAP } from './lib/models/StatsBase';

function AttrsForm(stats: Stat[]) {
    const statsForm = stats.map(stat =>
        <li> {HOYO_MAP[stat.id]}: {stat.value}</li>
    );
    return statsForm
}

function DiscsForm(discs: Disc[]) {
    const discForm = discs.map(disc =>
        <div>
            <h3>{HOYO_MAP[disc.main_stats.id]} - {disc.main_stats.value} </h3>
            <ul> {AttrsForm(disc.substats)} </ul>
        </div>
    );
    return discForm
}

function DiscSetForm() {
    const serviceHoyolab = new ServiceDiscs(jane)
    const discSet: DiscSet = serviceHoyolab.buildDiscSet()

    const discSetForm = DiscsForm(discSet.discs);

    return <div>{discSetForm}</div>;
}

export default DiscSetForm